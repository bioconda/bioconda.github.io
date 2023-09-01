:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agrvate'
.. highlight: bash

agrvate
=======

.. conda:recipe:: agrvate
   :replaces_section_title:
   :noindex:

   Rapid identification of Staphylococcus aureus agr locus type and agr operon variants.

   :homepage: https://github.com/VishnuRaghuram94/AgrVATE
   :license: MIT
   :recipe: /`agrvate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agrvate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agrvate/meta.yaml>`_

   


.. conda:package:: agrvate

   |downloads_agrvate| |docker_agrvate|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends blast: 
   :depends file: 
   :depends hmmer: 
   :depends mummer: 
   :depends seqkit: 
   :depends snippy: ``>=4.6.0``
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

      mamba install agrvate

   and update with::

      mamba update agrvate

  To create a new environment, run::

      mamba create --name myenvname agrvate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/agrvate:<tag>

   (see `agrvate/tags`_ for valid values for ``<tag>``)


.. |downloads_agrvate| image:: https://img.shields.io/conda/dn/bioconda/agrvate.svg?style=flat
   :target: https://anaconda.org/bioconda/agrvate
   :alt:   (downloads)
.. |docker_agrvate| image:: https://quay.io/repository/biocontainers/agrvate/status
   :target: https://quay.io/repository/biocontainers/agrvate
.. _`agrvate/tags`: https://quay.io/repository/biocontainers/agrvate?tab=tags


.. raw:: html

    <script>
        var package = "agrvate";
        var versions = ["1.0.2","1.0.1","1.0.1","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agrvate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agrvate/README.html