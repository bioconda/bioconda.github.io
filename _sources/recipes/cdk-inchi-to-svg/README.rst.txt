:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdk-inchi-to-svg'
.. highlight: bash

cdk-inchi-to-svg
================

.. conda:recipe:: cdk-inchi-to-svg
   :replaces_section_title:
   :noindex:

   Convert an InChI string to a SVG file

   :homepage: https://github.com/ipb-halle/cdk-inchi-to-svg
   :license: BSD-2-Clause
   :recipe: /`cdk-inchi-to-svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdk-inchi-to-svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdk-inchi-to-svg/meta.yaml>`_

   


.. conda:package:: cdk-inchi-to-svg

   |downloads_cdk-inchi-to-svg| |docker_cdk-inchi-to-svg|

   :versions:
      
      

      ``0.9-1``,  ``0.9-0``

      

   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: ``>=2.13.1,<3.0a0``
   :depends openjdk: ``>=8.0.144``
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

      mamba install cdk-inchi-to-svg

   and update with::

      mamba update cdk-inchi-to-svg

  To create a new environment, run::

      mamba create --name myenvname cdk-inchi-to-svg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cdk-inchi-to-svg:<tag>

   (see `cdk-inchi-to-svg/tags`_ for valid values for ``<tag>``)


.. |downloads_cdk-inchi-to-svg| image:: https://img.shields.io/conda/dn/bioconda/cdk-inchi-to-svg.svg?style=flat
   :target: https://anaconda.org/bioconda/cdk-inchi-to-svg
   :alt:   (downloads)
.. |docker_cdk-inchi-to-svg| image:: https://quay.io/repository/biocontainers/cdk-inchi-to-svg/status
   :target: https://quay.io/repository/biocontainers/cdk-inchi-to-svg
.. _`cdk-inchi-to-svg/tags`: https://quay.io/repository/biocontainers/cdk-inchi-to-svg?tab=tags


.. raw:: html

    <script>
        var package = "cdk-inchi-to-svg";
        var versions = ["0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdk-inchi-to-svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdk-inchi-to-svg/README.html