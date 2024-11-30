:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qtip'
.. highlight: bash

qtip
====

.. conda:recipe:: qtip
   :replaces_section_title:
   :noindex:

   A tandem simulation approach for accurately predicting read alignment
   mapping qualities.


   :homepage: https://github.com/BenLangmead/qtip
   :license: MIT
   :recipe: /`qtip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtip/meta.yaml>`_

   


.. conda:package:: qtip

   |downloads_qtip| |docker_qtip|

   :versions:
      
      

      ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scikit-learn: 
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

      mamba install qtip

   and update with::

      mamba update qtip

  To create a new environment, run::

      mamba create --name myenvname qtip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qtip:<tag>

   (see `qtip/tags`_ for valid values for ``<tag>``)


.. |downloads_qtip| image:: https://img.shields.io/conda/dn/bioconda/qtip.svg?style=flat
   :target: https://anaconda.org/bioconda/qtip
   :alt:   (downloads)
.. |docker_qtip| image:: https://quay.io/repository/biocontainers/qtip/status
   :target: https://quay.io/repository/biocontainers/qtip
.. _`qtip/tags`: https://quay.io/repository/biocontainers/qtip?tab=tags


.. raw:: html

    <script>
        var package = "qtip";
        var versions = ["1.6.2","1.6.2","1.6.2"];
    </script>





Notes
-----
For running qtip\, you will need to install any of the supported read mappers\,
\(e.g.\, bowtie2\)\, in the minimum required version. See homepage for details.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qtip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qtip/README.html