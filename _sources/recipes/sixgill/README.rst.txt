:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sixgill'
.. highlight: bash

sixgill
=======

.. conda:recipe:: sixgill
   :replaces_section_title:
   :noindex:

   six\-frame genome\-inferred libraries for LC\-MS\/MS

   :homepage: 
   :developer docs: https://github.com/dhmay/sixgill
   :license: Apache / Apache Software License
   :recipe: /`sixgill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sixgill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sixgill/meta.yaml>`_

   


.. conda:package:: sixgill

   |downloads_sixgill| |docker_sixgill|

   :versions:
      
      

      ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends biopython: 
   :depends pysam: ``>=0.9.0``
   :depends python: ``<3``
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

      mamba install sixgill

   and update with::

      mamba update sixgill

  To create a new environment, run::

      mamba create --name myenvname sixgill

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sixgill:<tag>

   (see `sixgill/tags`_ for valid values for ``<tag>``)


.. |downloads_sixgill| image:: https://img.shields.io/conda/dn/bioconda/sixgill.svg?style=flat
   :target: https://anaconda.org/bioconda/sixgill
   :alt:   (downloads)
.. |docker_sixgill| image:: https://quay.io/repository/biocontainers/sixgill/status
   :target: https://quay.io/repository/biocontainers/sixgill
.. _`sixgill/tags`: https://quay.io/repository/biocontainers/sixgill?tab=tags


.. raw:: html

    <script>
        var package = "sixgill";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sixgill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sixgill/README.html