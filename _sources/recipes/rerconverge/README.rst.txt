:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rerconverge'
.. highlight: bash

rerconverge
===========

.. conda:recipe:: rerconverge
   :replaces_section_title:
   :noindex:

   RERconverge is a set of software written in R that estimates the correlation between relative evolutionary rates of gene.

   :homepage: https://github.com/nclark-lab/RERconverge
   :license: GPL / GPL-3
   :recipe: /`rerconverge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rerconverge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rerconverge/meta.yaml>`_

   


.. conda:package:: rerconverge

   |downloads_rerconverge| |docker_rerconverge|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-devtools: 
   :depends r-geiger: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-phangorn: 
   :depends r-phytools: 
   :depends r-rcpparmadillo: 
   :depends r-weights: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rerconverge

   and update with::

      conda update rerconverge

   or use the docker container::

      docker pull quay.io/biocontainers/rerconverge:<tag>

   (see `rerconverge/tags`_ for valid values for ``<tag>``)


.. |downloads_rerconverge| image:: https://img.shields.io/conda/dn/bioconda/rerconverge.svg?style=flat
   :target: https://anaconda.org/bioconda/rerconverge
   :alt:   (downloads)
.. |docker_rerconverge| image:: https://quay.io/repository/biocontainers/rerconverge/status
   :target: https://quay.io/repository/biocontainers/rerconverge
.. _`rerconverge/tags`: https://quay.io/repository/biocontainers/rerconverge?tab=tags


.. raw:: html

    <script>
        var package = "rerconverge";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rerconverge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rerconverge/README.html