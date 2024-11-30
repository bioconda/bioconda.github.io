:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qsignature'
.. highlight: bash

qsignature
==========

.. conda:recipe:: qsignature
   :replaces_section_title:
   :noindex:

   qsignature is a simple and highly effective method for detecting potential sample mix\-ups using distance measurements between SNP

   :homepage: http://sourceforge.net/p/adamajava/wiki/Home/
   :license: GPLv3
   :recipe: /`qsignature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qsignature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qsignature/meta.yaml>`_

   


.. conda:package:: qsignature

   |downloads_qsignature| |docker_qsignature|

   :versions:
      
      

      ``0.1pre-5``,  ``0.1pre-4``,  ``0.1pre-3``,  ``0.1pre-2``,  ``0.1pre-1``,  ``0.1pre-0``

      

   
   :depends openjdk: 
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

      mamba install qsignature

   and update with::

      mamba update qsignature

  To create a new environment, run::

      mamba create --name myenvname qsignature

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qsignature:<tag>

   (see `qsignature/tags`_ for valid values for ``<tag>``)


.. |downloads_qsignature| image:: https://img.shields.io/conda/dn/bioconda/qsignature.svg?style=flat
   :target: https://anaconda.org/bioconda/qsignature
   :alt:   (downloads)
.. |docker_qsignature| image:: https://quay.io/repository/biocontainers/qsignature/status
   :target: https://quay.io/repository/biocontainers/qsignature
.. _`qsignature/tags`: https://quay.io/repository/biocontainers/qsignature?tab=tags


.. raw:: html

    <script>
        var package = "qsignature";
        var versions = ["0.1pre","0.1pre","0.1pre","0.1pre","0.1pre"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qsignature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qsignature/README.html