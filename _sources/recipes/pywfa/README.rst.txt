:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pywfa'
.. highlight: bash

pywfa
=====

.. conda:recipe:: pywfa
   :replaces_section_title:
   :noindex:

   A python wrapper for wavefront alignment using WFA2\-lib

   :homepage: https://github.com/kcleal/pywfa
   :license: MIT
   :recipe: /`pywfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywfa/meta.yaml>`_

   


.. conda:package:: pywfa

   |downloads_pywfa| |docker_pywfa|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-2``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python_abi: ``3.11.* *_cp311``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pywfa

   and update with::

      conda update pywfa

   or use the docker container::

      docker pull quay.io/biocontainers/pywfa:<tag>

   (see `pywfa/tags`_ for valid values for ``<tag>``)


.. |downloads_pywfa| image:: https://img.shields.io/conda/dn/bioconda/pywfa.svg?style=flat
   :target: https://anaconda.org/bioconda/pywfa
   :alt:   (downloads)
.. |docker_pywfa| image:: https://quay.io/repository/biocontainers/pywfa/status
   :target: https://quay.io/repository/biocontainers/pywfa
.. _`pywfa/tags`: https://quay.io/repository/biocontainers/pywfa?tab=tags


.. raw:: html

    <script>
        var package = "pywfa";
        var versions = ["0.5.1","0.5.0","0.5.0","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pywfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pywfa/README.html