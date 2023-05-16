:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexserv'
.. highlight: bash

flexserv
========

.. conda:recipe:: flexserv
   :replaces_section_title:
   :noindex:

   FlexServ protein structure conformational ensemble generation tools

   :homepage: http://mmb.irbbarcelona.org/gitlab/adam/FlexServ
   :license: APACHE / Apache Software License
   :recipe: /`flexserv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexserv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexserv/meta.yaml>`_

   Tools for the generation of protein structure conformational ensembles taken from the FlexServ MMB Web Server \(https\:\/\/mmb.irbbarcelona.org\/FlexServ\/\)\: Discrete Molecular Dynamics \(DMD\)\, Brownian Dynamics \(BD\) and Normal Mode Analysis \(NMA\).


.. conda:package:: flexserv

   |downloads_flexserv| |docker_flexserv|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flexserv

   and update with::

      conda update flexserv

   or use the docker container::

      docker pull quay.io/biocontainers/flexserv:<tag>

   (see `flexserv/tags`_ for valid values for ``<tag>``)


.. |downloads_flexserv| image:: https://img.shields.io/conda/dn/bioconda/flexserv.svg?style=flat
   :target: https://anaconda.org/bioconda/flexserv
   :alt:   (downloads)
.. |docker_flexserv| image:: https://quay.io/repository/biocontainers/flexserv/status
   :target: https://quay.io/repository/biocontainers/flexserv
.. _`flexserv/tags`: https://quay.io/repository/biocontainers/flexserv?tab=tags


.. raw:: html

    <script>
        var package = "flexserv";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexserv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexserv/README.html