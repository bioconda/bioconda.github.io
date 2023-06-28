:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emvc-2'
.. highlight: bash

emvc-2
======

.. conda:recipe:: emvc-2
   :replaces_section_title:
   :noindex:

   An efficient SNV variant caller based on the expectation maximization algorithm.

   :homepage: https://github.com/guilledufort/EMVC-2
   :license: MIT / MIT
   :recipe: /`emvc-2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emvc-2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emvc-2/meta.yaml>`_

   


.. conda:package:: emvc-2

   |downloads_emvc-2| |docker_emvc-2|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.16.6,<=1.20.3``
   :depends python: ``3.8.1,<=3.8.5``
   :depends samtools: ``1.9``
   :depends scikit-learn: ``>=0.22.2,<=0.24.2``
   :depends scipy: ``>=1.1.0,<1.5.4``
   :depends tqdm: ``>=4.46.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install emvc-2

   and update with::

      conda update emvc-2

   or use the docker container::

      docker pull quay.io/biocontainers/emvc-2:<tag>

   (see `emvc-2/tags`_ for valid values for ``<tag>``)


.. |downloads_emvc-2| image:: https://img.shields.io/conda/dn/bioconda/emvc-2.svg?style=flat
   :target: https://anaconda.org/bioconda/emvc-2
   :alt:   (downloads)
.. |docker_emvc-2| image:: https://quay.io/repository/biocontainers/emvc-2/status
   :target: https://quay.io/repository/biocontainers/emvc-2
.. _`emvc-2/tags`: https://quay.io/repository/biocontainers/emvc-2?tab=tags


.. raw:: html

    <script>
        var package = "emvc-2";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emvc-2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emvc-2/README.html