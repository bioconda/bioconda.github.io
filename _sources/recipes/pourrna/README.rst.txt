:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pourrna'
.. highlight: bash

pourrna
=======

.. conda:recipe:: pourrna
   :replaces_section_title:
   :noindex:

   Compute local minima and respective transition rates of an RNA energy landscape.

   :homepage: https://github.com/ViennaRNA/pourRNA/
   :license: GPLv2
   :recipe: /`pourrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pourrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pourrna/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz583`

   


.. conda:package:: pourrna

   |downloads_pourrna| |docker_pourrna|

   :versions:
      
      

      ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends viennarna: ``>=2.4.14,<3.0.0``
   :depends viennarna: ``>=2.5.1,<2.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pourrna

   and update with::

      conda update pourrna

   or use the docker container::

      docker pull quay.io/biocontainers/pourrna:<tag>

   (see `pourrna/tags`_ for valid values for ``<tag>``)


.. |downloads_pourrna| image:: https://img.shields.io/conda/dn/bioconda/pourrna.svg?style=flat
   :target: https://anaconda.org/bioconda/pourrna
   :alt:   (downloads)
.. |docker_pourrna| image:: https://quay.io/repository/biocontainers/pourrna/status
   :target: https://quay.io/repository/biocontainers/pourrna
.. _`pourrna/tags`: https://quay.io/repository/biocontainers/pourrna?tab=tags


.. raw:: html

    <script>
        var package = "pourrna";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pourrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pourrna/README.html