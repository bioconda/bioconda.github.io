:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'relion'
.. highlight: bash

relion
======

.. conda:recipe:: relion
   :replaces_section_title:
   :noindex:

   Image\-processing software for cryo\-electron microscopy

   :homepage: https://github.com/3dem/relion
   :license: GPL / GPLv2
   :recipe: /`relion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relion/meta.yaml>`_

   


.. conda:package:: relion

   |downloads_relion| |docker_relion|

   :versions:
      
      

      ``4.0.1-2``,  ``4.0.1-1``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.1.3-0``

      

   
   :depends fftw: ``>=3.3.10,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libpng: ``>=1.6.39,<1.7.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libtiff: ``>=4.4.0,<4.5.0a0``
   :depends openmpi: ``>=4.1.5,<5.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install relion

   and update with::

      conda update relion

   or use the docker container::

      docker pull quay.io/biocontainers/relion:<tag>

   (see `relion/tags`_ for valid values for ``<tag>``)


.. |downloads_relion| image:: https://img.shields.io/conda/dn/bioconda/relion.svg?style=flat
   :target: https://anaconda.org/bioconda/relion
   :alt:   (downloads)
.. |docker_relion| image:: https://quay.io/repository/biocontainers/relion/status
   :target: https://quay.io/repository/biocontainers/relion
.. _`relion/tags`: https://quay.io/repository/biocontainers/relion?tab=tags


.. raw:: html

    <script>
        var package = "relion";
        var versions = ["4.0.1","4.0.1","4.0.1","4.0.0","3.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/relion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/relion/README.html