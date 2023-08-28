:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-soap-nmr'
.. highlight: bash

r-soap-nmr
==========

.. conda:recipe:: r-soap-nmr
   :replaces_section_title:
   :noindex:

   R package for 1H\-NMR data pre\-treatment 

   :homepage: https://github.com/ManonMartin/SOAP-NMR
   :license: GPL2
   :recipe: /`r-soap-nmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-soap-nmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-soap-nmr/meta.yaml>`_

   


.. conda:package:: r-soap-nmr

   |downloads_r-soap-nmr| |docker_r-soap-nmr|

   :versions:
      
      

      ``0.1.0.20170207-6``,  ``0.1.0.20170207-5``,  ``0.1.0.20170207-4``,  ``0.1.0.20170207-3``,  ``0.1.0.20170207-2``,  ``0.1.0.20170207-1``,  ``0.1.0.20170207-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-ptw: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-soap-nmr

   and update with::

      mamba update r-soap-nmr

  To create a new environment, run::

      mamba create --name myenvname r-soap-nmr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-soap-nmr:<tag>

   (see `r-soap-nmr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-soap-nmr| image:: https://img.shields.io/conda/dn/bioconda/r-soap-nmr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-soap-nmr
   :alt:   (downloads)
.. |docker_r-soap-nmr| image:: https://quay.io/repository/biocontainers/r-soap-nmr/status
   :target: https://quay.io/repository/biocontainers/r-soap-nmr
.. _`r-soap-nmr/tags`: https://quay.io/repository/biocontainers/r-soap-nmr?tab=tags


.. raw:: html

    <script>
        var package = "r-soap-nmr";
        var versions = ["0.1.0.20170207","0.1.0.20170207","0.1.0.20170207","0.1.0.20170207","0.1.0.20170207"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-soap-nmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-soap-nmr/README.html