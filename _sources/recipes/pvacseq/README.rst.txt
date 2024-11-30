:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pvacseq'
.. highlight: bash

pvacseq
=======

.. conda:recipe:: pvacseq
   :replaces_section_title:
   :noindex:

   Personalized Variant Antigens by Cancer Sequencing \(pVAC\-Seq\)

   :homepage: https://github.com/griffithlab/pVAC-Seq
   :documentation: http://pvac-seq.readthedocs.io/
   
   :license: Other / NPOSL-3.0
   :recipe: /`pvacseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pvacseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pvacseq/meta.yaml>`_

   


.. conda:package:: pvacseq

   |downloads_pvacseq| |docker_pvacseq|

   :versions:
      
      

      ``4.0.10-3``,  ``4.0.10-2``,  ``4.0.10-0``,  ``4.0.9-0``

      

   
   :depends connexion: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends pyvcf: 
   :depends pyyaml: 
   :depends requests: 
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

      mamba install pvacseq

   and update with::

      mamba update pvacseq

  To create a new environment, run::

      mamba create --name myenvname pvacseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pvacseq:<tag>

   (see `pvacseq/tags`_ for valid values for ``<tag>``)


.. |downloads_pvacseq| image:: https://img.shields.io/conda/dn/bioconda/pvacseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pvacseq
   :alt:   (downloads)
.. |docker_pvacseq| image:: https://quay.io/repository/biocontainers/pvacseq/status
   :target: https://quay.io/repository/biocontainers/pvacseq
.. _`pvacseq/tags`: https://quay.io/repository/biocontainers/pvacseq?tab=tags


.. raw:: html

    <script>
        var package = "pvacseq";
        var versions = ["4.0.10","4.0.10","4.0.10","4.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pvacseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pvacseq/README.html