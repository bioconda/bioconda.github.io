:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qiime-default-reference'
.. highlight: bash

qiime-default-reference
=======================

.. conda:recipe:: qiime-default-reference/0.1.3
   :replaces_section_title:
   :noindex:

   Default reference data files for use with QIIME.

   :homepage: http://www.qiime.org
   :license: CC BY-SA 3.0
   :recipe: /`qiime-default-reference <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime-default-reference>`_/`0.1.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime-default-reference/0.1.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime-default-reference/0.1.3/meta.yaml>`_

   


.. conda:package:: qiime-default-reference

   |downloads_qiime-default-reference| |docker_qiime-default-reference|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends python: 
   :depends six: 
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

      mamba install qiime-default-reference

   and update with::

      mamba update qiime-default-reference

  To create a new environment, run::

      mamba create --name myenvname qiime-default-reference

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qiime-default-reference:<tag>

   (see `qiime-default-reference/tags`_ for valid values for ``<tag>``)


.. |downloads_qiime-default-reference| image:: https://img.shields.io/conda/dn/bioconda/qiime-default-reference.svg?style=flat
   :target: https://anaconda.org/bioconda/qiime-default-reference
   :alt:   (downloads)
.. |docker_qiime-default-reference| image:: https://quay.io/repository/biocontainers/qiime-default-reference/status
   :target: https://quay.io/repository/biocontainers/qiime-default-reference
.. _`qiime-default-reference/tags`: https://quay.io/repository/biocontainers/qiime-default-reference?tab=tags


.. raw:: html

    <script>
        var package = "qiime-default-reference";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiime-default-reference/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiime-default-reference/README.html