:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'omamer'
.. highlight: bash

omamer
======

.. conda:recipe:: omamer
   :replaces_section_title:
   :noindex:

   OMAmer \- tree\-driven and alignment\-free protein assignment to sub\-families

   :homepage: https://github.com/DessimozLab/omamer
   :license: LGPL-3.0
   :recipe: /`omamer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omamer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omamer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab219`

   


.. conda:package:: omamer

   |downloads_omamer| |docker_omamer|

   :versions:
      
      

      ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``

      

   
   :depends alive-progress: 
   :depends biopython: 
   :depends ete3: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: ``>2.0.0``
   :depends property-manager: 
   :depends pysais: 
   :depends pytables: 
   :depends python: ``>=3.8``
   :depends rmath4: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install omamer

   and update with::

      mamba update omamer

  To create a new environment, run::

      mamba create --name myenvname omamer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/omamer:<tag>

   (see `omamer/tags`_ for valid values for ``<tag>``)


.. |downloads_omamer| image:: https://img.shields.io/conda/dn/bioconda/omamer.svg?style=flat
   :target: https://anaconda.org/bioconda/omamer
   :alt:   (downloads)
.. |docker_omamer| image:: https://quay.io/repository/biocontainers/omamer/status
   :target: https://quay.io/repository/biocontainers/omamer
.. _`omamer/tags`: https://quay.io/repository/biocontainers/omamer?tab=tags


.. raw:: html

    <script>
        var package = "omamer";
        var versions = ["2.0.4","2.0.3","2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/omamer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/omamer/README.html