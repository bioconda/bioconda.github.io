:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'syri'
.. highlight: bash

syri
====

.. conda:recipe:: syri
   :replaces_section_title:
   :noindex:

   Synteny and rearrangement identifier between whole\-genome assemblies

   :homepage: https://github.com/schneebergerlab/syri
   :license: MIT License
   :recipe: /`syri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syri/meta.yaml>`_

   


.. conda:package:: syri

   |downloads_syri| |docker_syri|

   :versions:
      
      

      ``1.6-0``,  ``1.5.4-0``,  ``1.5.3-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends longestrunsubsequence: 
   :depends numpy: ``>=1.20``
   :depends numpy: ``>=1.22.3,<2.0a0``
   :depends pandas: 
   :depends psutil: 
   :depends pulp: 
   :depends pysam: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python-igraph: 
   :depends python_abi: ``3.8.* *_cp38``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install syri

   and update with::

      conda update syri

   or use the docker container::

      docker pull quay.io/biocontainers/syri:<tag>

   (see `syri/tags`_ for valid values for ``<tag>``)


.. |downloads_syri| image:: https://img.shields.io/conda/dn/bioconda/syri.svg?style=flat
   :target: https://anaconda.org/bioconda/syri
   :alt:   (downloads)
.. |docker_syri| image:: https://quay.io/repository/biocontainers/syri/status
   :target: https://quay.io/repository/biocontainers/syri
.. _`syri/tags`: https://quay.io/repository/biocontainers/syri?tab=tags


.. raw:: html

    <script>
        var package = "syri";
        var versions = ["1.6","1.5.4","1.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/syri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/syri/README.html