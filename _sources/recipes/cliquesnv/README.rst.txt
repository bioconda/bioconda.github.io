:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cliquesnv'
.. highlight: bash

cliquesnv
=========

.. conda:recipe:: cliquesnv
   :replaces_section_title:
   :noindex:

   Scalable Reconstruction of Intra\-Host Viral Populations from NGS Reads

   :homepage: https://github.com/vtsyvina/CliqueSNV
   :license: MIT
   :recipe: /`cliquesnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cliquesnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cliquesnv/meta.yaml>`_

   


.. conda:package:: cliquesnv

   |downloads_cliquesnv| |docker_cliquesnv|

   :versions:
      
      

      ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.0-0``,  ``1.5.7-1``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install cliquesnv

   and update with::

      mamba update cliquesnv

  To create a new environment, run::

      mamba create --name myenvname cliquesnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cliquesnv:<tag>

   (see `cliquesnv/tags`_ for valid values for ``<tag>``)


.. |downloads_cliquesnv| image:: https://img.shields.io/conda/dn/bioconda/cliquesnv.svg?style=flat
   :target: https://anaconda.org/bioconda/cliquesnv
   :alt:   (downloads)
.. |docker_cliquesnv| image:: https://quay.io/repository/biocontainers/cliquesnv/status
   :target: https://quay.io/repository/biocontainers/cliquesnv
.. _`cliquesnv/tags`: https://quay.io/repository/biocontainers/cliquesnv?tab=tags


.. raw:: html

    <script>
        var package = "cliquesnv";
        var versions = ["2.0.3","2.0.2","2.0.0","1.5.7","1.5.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cliquesnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cliquesnv/README.html