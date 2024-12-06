:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mashpit'
.. highlight: bash

mashpit
=======

.. conda:recipe:: mashpit
   :replaces_section_title:
   :noindex:

   Sketch\-based surveillance platform.

   :homepage: https://github.com/tongzhouxu/mashpit
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`mashpit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashpit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashpit/meta.yaml>`_

   


.. conda:package:: mashpit

   |downloads_mashpit| |docker_mashpit|

   :versions:
      
      

      ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.2-0``

      

   
   :depends biopython: ``>=1.83``
   :depends dask-core: ``>=2024.1``
   :depends flask: ``>=3.0.3``
   :depends ncbi-datasets-cli: ``>=16.10``
   :depends ncbi-datasets-pylib: ``>=16.6.0``
   :depends numpy: ``<2.0.0``
   :depends pandas: ``>=2.0.3``
   :depends phytreeviz: 
   :depends psutil: 
   :depends python: ``>=3.8``
   :depends requests: 
   :depends scikit-bio: 
   :depends scipy: ``>=1.0``
   :depends screed: ``>=1.0.5``
   :depends sourmash: ``>=4.6.1``
   :depends tqdm: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mashpit

   and update with::

      mamba update mashpit

  To create a new environment, run::

      mamba create --name myenvname mashpit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mashpit:<tag>

   (see `mashpit/tags`_ for valid values for ``<tag>``)


.. |downloads_mashpit| image:: https://img.shields.io/conda/dn/bioconda/mashpit.svg?style=flat
   :target: https://anaconda.org/bioconda/mashpit
   :alt:   (downloads)
.. |docker_mashpit| image:: https://quay.io/repository/biocontainers/mashpit/status
   :target: https://quay.io/repository/biocontainers/mashpit
.. _`mashpit/tags`: https://quay.io/repository/biocontainers/mashpit?tab=tags


.. raw:: html

    <script>
        var package = "mashpit";
        var versions = ["0.9.8","0.9.7","0.9.6","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mashpit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mashpit/README.html