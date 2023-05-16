:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orfipy'
.. highlight: bash

orfipy
======

.. conda:recipe:: orfipy
   :replaces_section_title:
   :noindex:

   orfipy\: fast and flexible search for open reading frames in fasta sequences

   :homepage: https://github.com/urmi-21/orfipy
   :license: MIT / MIT
   :recipe: /`orfipy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfipy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfipy/meta.yaml>`_

   


.. conda:package:: orfipy

   |downloads_orfipy| |docker_orfipy|

   :versions:
      
      

      ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends colorama: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends psutil: 
   :depends pyahocorasick: 
   :depends pyfastx: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orfipy

   and update with::

      conda update orfipy

   or use the docker container::

      docker pull quay.io/biocontainers/orfipy:<tag>

   (see `orfipy/tags`_ for valid values for ``<tag>``)


.. |downloads_orfipy| image:: https://img.shields.io/conda/dn/bioconda/orfipy.svg?style=flat
   :target: https://anaconda.org/bioconda/orfipy
   :alt:   (downloads)
.. |docker_orfipy| image:: https://quay.io/repository/biocontainers/orfipy/status
   :target: https://quay.io/repository/biocontainers/orfipy
.. _`orfipy/tags`: https://quay.io/repository/biocontainers/orfipy?tab=tags


.. raw:: html

    <script>
        var package = "orfipy";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfipy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfipy/README.html