:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drprg'
.. highlight: bash

drprg
=====

.. conda:recipe:: drprg
   :replaces_section_title:
   :noindex:

   Drug resistance prediction with reference graphs

   :homepage: https://github.com/mbhall88/drprg
   :license: MIT
   :recipe: /`drprg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drprg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drprg/meta.yaml>`_

   


.. conda:package:: drprg

   |downloads_drprg| |docker_drprg|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends bcftools: 
   :depends libgcc-ng: ``>=12``
   :depends mafft: ``7.505.*``
   :depends make_prg: ``0.4.*``
   :depends openssl: ``>=1.1.1t,<1.1.2a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install drprg

   and update with::

      conda update drprg

   or use the docker container::

      docker pull quay.io/biocontainers/drprg:<tag>

   (see `drprg/tags`_ for valid values for ``<tag>``)


.. |downloads_drprg| image:: https://img.shields.io/conda/dn/bioconda/drprg.svg?style=flat
   :target: https://anaconda.org/bioconda/drprg
   :alt:   (downloads)
.. |docker_drprg| image:: https://quay.io/repository/biocontainers/drprg/status
   :target: https://quay.io/repository/biocontainers/drprg
.. _`drprg/tags`: https://quay.io/repository/biocontainers/drprg?tab=tags


.. raw:: html

    <script>
        var package = "drprg";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drprg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drprg/README.html