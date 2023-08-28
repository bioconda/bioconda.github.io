:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioutils'
.. highlight: bash

bioutils
========

.. conda:recipe:: bioutils
   :replaces_section_title:
   :noindex:

   miscellaneous simple bioinformatics utilities and lookup tables

   :homepage: https://github.com/biocommons/bioutils
   :license: APACHE / Apache-2.0
   :recipe: /`bioutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioutils/meta.yaml>`_

   


.. conda:package:: bioutils

   |downloads_bioutils| |docker_bioutils|

   :versions:
      
      

      ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``

      

   
   :depends attrs: 
   :depends python: ``>=3.6``
   :depends requests: 
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

      mamba install bioutils

   and update with::

      mamba update bioutils

  To create a new environment, run::

      mamba create --name myenvname bioutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioutils:<tag>

   (see `bioutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioutils| image:: https://img.shields.io/conda/dn/bioconda/bioutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioutils
   :alt:   (downloads)
.. |docker_bioutils| image:: https://quay.io/repository/biocontainers/bioutils/status
   :target: https://quay.io/repository/biocontainers/bioutils
.. _`bioutils/tags`: https://quay.io/repository/biocontainers/bioutils?tab=tags


.. raw:: html

    <script>
        var package = "bioutils";
        var versions = ["0.5.7","0.5.6","0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioutils/README.html