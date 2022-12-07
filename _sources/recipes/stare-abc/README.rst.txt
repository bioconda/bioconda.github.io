:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stare-abc'
.. highlight: bash

stare-abc
=========

.. conda:recipe:: stare-abc
   :replaces_section_title:
   :noindex:

   Calculate Gene\-TF affinities via enhancer\-gene interactions

   :homepage: https://github.com/SchulzLab/STARE
   :license: MIT
   :recipe: /`stare-abc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stare-abc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stare-abc/meta.yaml>`_

   


.. conda:package:: stare-abc

   |downloads_stare-abc| |docker_stare-abc|

   :versions:
      
      

      ``1.0.3.1-0``,  ``1.0.3-0``

      

   
   :depends bedtools: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends make: 
   :depends openmp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stare-abc

   and update with::

      conda update stare-abc

   or use the docker container::

      docker pull quay.io/biocontainers/stare-abc:<tag>

   (see `stare-abc/tags`_ for valid values for ``<tag>``)


.. |downloads_stare-abc| image:: https://img.shields.io/conda/dn/bioconda/stare-abc.svg?style=flat
   :target: https://anaconda.org/bioconda/stare-abc
   :alt:   (downloads)
.. |docker_stare-abc| image:: https://quay.io/repository/biocontainers/stare-abc/status
   :target: https://quay.io/repository/biocontainers/stare-abc
.. _`stare-abc/tags`: https://quay.io/repository/biocontainers/stare-abc?tab=tags


.. raw:: html

    <script>
        var package = "stare-abc";
        var versions = ["1.0.3.1","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stare-abc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stare-abc/README.html