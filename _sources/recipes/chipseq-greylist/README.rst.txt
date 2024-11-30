:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chipseq-greylist'
.. highlight: bash

chipseq-greylist
================

.. conda:recipe:: chipseq-greylist
   :replaces_section_title:
   :noindex:

   Python implementation of GreyListChIP Bioconductor package.

   :homepage: https://github.com/roryk/chipseq-greylist
   :license: MIT
   :recipe: /`chipseq-greylist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chipseq-greylist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chipseq-greylist/meta.yaml>`_

   


.. conda:package:: chipseq-greylist

   |downloads_chipseq-greylist| |docker_chipseq-greylist|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends sambamba: 
   :depends scipy: 
   :depends statsmodels: 
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

      mamba install chipseq-greylist

   and update with::

      mamba update chipseq-greylist

  To create a new environment, run::

      mamba create --name myenvname chipseq-greylist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chipseq-greylist:<tag>

   (see `chipseq-greylist/tags`_ for valid values for ``<tag>``)


.. |downloads_chipseq-greylist| image:: https://img.shields.io/conda/dn/bioconda/chipseq-greylist.svg?style=flat
   :target: https://anaconda.org/bioconda/chipseq-greylist
   :alt:   (downloads)
.. |docker_chipseq-greylist| image:: https://quay.io/repository/biocontainers/chipseq-greylist/status
   :target: https://quay.io/repository/biocontainers/chipseq-greylist
.. _`chipseq-greylist/tags`: https://quay.io/repository/biocontainers/chipseq-greylist?tab=tags


.. raw:: html

    <script>
        var package = "chipseq-greylist";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chipseq-greylist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chipseq-greylist/README.html