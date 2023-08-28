:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irissv'
.. highlight: bash

irissv
======

.. conda:recipe:: irissv
   :replaces_section_title:
   :noindex:

   Software for refining insertion sequences in structural variant calls

   :homepage: https://github.com/mkirsche/Iris
   :license: MIT
   :recipe: /`irissv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irissv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irissv/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`irissv`

   


.. conda:package:: irissv

   |downloads_irissv| |docker_irissv|

   :versions:
      
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends minimap2: 
   :depends openjdk: ``>=11.0.1``
   :depends racon: 
   :depends samtools: ``>=1.9.1``
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

      mamba install irissv

   and update with::

      mamba update irissv

  To create a new environment, run::

      mamba create --name myenvname irissv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/irissv:<tag>

   (see `irissv/tags`_ for valid values for ``<tag>``)


.. |downloads_irissv| image:: https://img.shields.io/conda/dn/bioconda/irissv.svg?style=flat
   :target: https://anaconda.org/bioconda/irissv
   :alt:   (downloads)
.. |docker_irissv| image:: https://quay.io/repository/biocontainers/irissv/status
   :target: https://quay.io/repository/biocontainers/irissv
.. _`irissv/tags`: https://quay.io/repository/biocontainers/irissv?tab=tags


.. raw:: html

    <script>
        var package = "irissv";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irissv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irissv/README.html