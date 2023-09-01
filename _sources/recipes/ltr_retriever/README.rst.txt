:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ltr_retriever'
.. highlight: bash

ltr_retriever
=============

.. conda:recipe:: ltr_retriever
   :replaces_section_title:
   :noindex:

   Sensitive and accurate identification of LTR retrotransposons

   :homepage: https://github.com/oushujun/LTR_retriever
   :license: GPL / GPLv3
   :recipe: /`ltr_retriever <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_retriever>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_retriever/meta.yaml>`_

   


.. conda:package:: ltr_retriever

   |downloads_ltr_retriever| |docker_ltr_retriever|

   :versions:
      
      

      ``2.9.5-0``,  ``2.9.4-0``,  ``2.9.0-3``,  ``2.9.0-2``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.8.7-0``,  ``2.8-0``

      

   
   :depends cd-hit: 
   :depends libstdcxx-ng: ``<13``
   :depends perl: 
   :depends perl-text-soundex: 
   :depends repeatmasker: ``<4.1.5``
   :depends rmblast: ``<2.11``
   :depends tesorter: 
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

      mamba install ltr_retriever

   and update with::

      mamba update ltr_retriever

  To create a new environment, run::

      mamba create --name myenvname ltr_retriever

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ltr_retriever:<tag>

   (see `ltr_retriever/tags`_ for valid values for ``<tag>``)


.. |downloads_ltr_retriever| image:: https://img.shields.io/conda/dn/bioconda/ltr_retriever.svg?style=flat
   :target: https://anaconda.org/bioconda/ltr_retriever
   :alt:   (downloads)
.. |docker_ltr_retriever| image:: https://quay.io/repository/biocontainers/ltr_retriever/status
   :target: https://quay.io/repository/biocontainers/ltr_retriever
.. _`ltr_retriever/tags`: https://quay.io/repository/biocontainers/ltr_retriever?tab=tags


.. raw:: html

    <script>
        var package = "ltr_retriever";
        var versions = ["2.9.5","2.9.4","2.9.0","2.9.0","2.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ltr_retriever/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ltr_retriever/README.html