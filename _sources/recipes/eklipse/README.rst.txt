:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eklipse'
.. highlight: bash

eklipse
=======

.. conda:recipe:: eklipse
   :replaces_section_title:
   :noindex:

   eKLIPse is a sensitive and specific tool allowing the detection and quantification of large mtDNA rearrangements.

   :homepage: https://github.com/dooguypapua/eKLIPse
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`eklipse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eklipse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eklipse/meta.yaml>`_

   


.. conda:package:: eklipse

   |downloads_eklipse| |docker_eklipse|

   :versions:
      
      

      ``1.8-1``,  ``1.8-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.3.0``
   :depends circos: 
   :depends python: ``2.7.*``
   :depends samtools: 
   :depends tqdm: ``4.53.0.*``
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

      mamba install eklipse

   and update with::

      mamba update eklipse

  To create a new environment, run::

      mamba create --name myenvname eklipse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eklipse:<tag>

   (see `eklipse/tags`_ for valid values for ``<tag>``)


.. |downloads_eklipse| image:: https://img.shields.io/conda/dn/bioconda/eklipse.svg?style=flat
   :target: https://anaconda.org/bioconda/eklipse
   :alt:   (downloads)
.. |docker_eklipse| image:: https://quay.io/repository/biocontainers/eklipse/status
   :target: https://quay.io/repository/biocontainers/eklipse
.. _`eklipse/tags`: https://quay.io/repository/biocontainers/eklipse?tab=tags


.. raw:: html

    <script>
        var package = "eklipse";
        var versions = ["1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eklipse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eklipse/README.html