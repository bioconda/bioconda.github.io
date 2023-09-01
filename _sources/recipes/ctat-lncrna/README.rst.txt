:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctat-lncrna'
.. highlight: bash

ctat-lncrna
===========

.. conda:recipe:: ctat-lncrna
   :replaces_section_title:
   :noindex:

   ctat\-lncrna uses slncky

   :homepage: https://github.com/NCIP/ctat-lncrna
   :license: BSD / BSD-3-Clause
   :recipe: /`ctat-lncrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-lncrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-lncrna/meta.yaml>`_

   


.. conda:package:: ctat-lncrna

   |downloads_ctat-lncrna| |docker_ctat-lncrna|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-0``,  ``1.0-1``

      

   
   :depends slncky: ``>=1.0.4 1``
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

      mamba install ctat-lncrna

   and update with::

      mamba update ctat-lncrna

  To create a new environment, run::

      mamba create --name myenvname ctat-lncrna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ctat-lncrna:<tag>

   (see `ctat-lncrna/tags`_ for valid values for ``<tag>``)


.. |downloads_ctat-lncrna| image:: https://img.shields.io/conda/dn/bioconda/ctat-lncrna.svg?style=flat
   :target: https://anaconda.org/bioconda/ctat-lncrna
   :alt:   (downloads)
.. |docker_ctat-lncrna| image:: https://quay.io/repository/biocontainers/ctat-lncrna/status
   :target: https://quay.io/repository/biocontainers/ctat-lncrna
.. _`ctat-lncrna/tags`: https://quay.io/repository/biocontainers/ctat-lncrna?tab=tags


.. raw:: html

    <script>
        var package = "ctat-lncrna";
        var versions = ["1.0.1","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctat-lncrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctat-lncrna/README.html