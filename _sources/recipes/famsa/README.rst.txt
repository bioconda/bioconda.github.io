:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'famsa'
.. highlight: bash

famsa
=====

.. conda:recipe:: famsa
   :replaces_section_title:
   :noindex:

   Algorithm for large\-scale multiple sequence alignments

   :homepage: https://github.com/refresh-bio/FAMSA
   :license: GPL / GPL-3
   :recipe: /`famsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famsa/meta.yaml>`_
   :links: doi: :doi:`10.1038/srep33964`, biotools: :biotools:`famsa`

   


.. conda:package:: famsa

   |downloads_famsa| |docker_famsa|

   :versions:
      
      

      ``2.0.1-0``,  ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.5.12-0``,  ``1.3.2-0``,  ``1.2.5-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install famsa

   and update with::

      conda update famsa

   or use the docker container::

      docker pull quay.io/biocontainers/famsa:<tag>

   (see `famsa/tags`_ for valid values for ``<tag>``)


.. |downloads_famsa| image:: https://img.shields.io/conda/dn/bioconda/famsa.svg?style=flat
   :target: https://anaconda.org/bioconda/famsa
   :alt:   (downloads)
.. |docker_famsa| image:: https://quay.io/repository/biocontainers/famsa/status
   :target: https://quay.io/repository/biocontainers/famsa
.. _`famsa/tags`: https://quay.io/repository/biocontainers/famsa?tab=tags


.. raw:: html

    <script>
        var package = "famsa";
        var versions = ["2.0.1","1.6.2","1.6.2","1.6.2","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/famsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/famsa/README.html