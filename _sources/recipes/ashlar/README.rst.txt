:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ashlar'
.. highlight: bash

ashlar
======

.. conda:recipe:: ashlar
   :replaces_section_title:
   :noindex:

   Alignment by Simultaneous Harmonization of Layer\/Adjacency Registration

   :homepage: https://github.com/sorgerlab/ashlar
   :documentation: https://labsyspharm.github.io/ashlar/
   
   :license: MIT
   :recipe: /`ashlar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ashlar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ashlar/meta.yaml>`_

   


.. conda:package:: ashlar

   |downloads_ashlar| |docker_ashlar|

   :versions:
      
      

      ``1.17.0-0``,  ``1.16.0-0``

      

   
   :depends blessed: ``>=1.17``
   :depends matplotlib-base: ``>=3.1.2``
   :depends networkx: ``>=2.4``
   :depends numpy: ``>=1.18.1``
   :depends pip: 
   :depends pyjnius: ``>=1.2.1``
   :depends python: 
   :depends scikit-image: ``0.19``
   :depends scikit-learn: ``>=0.21.1``
   :depends scipy: ``>=1.4.1``
   :depends tifffile: ``>=2022.4.8``
   :depends zarr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ashlar

   and update with::

      conda update ashlar

   or use the docker container::

      docker pull quay.io/biocontainers/ashlar:<tag>

   (see `ashlar/tags`_ for valid values for ``<tag>``)


.. |downloads_ashlar| image:: https://img.shields.io/conda/dn/bioconda/ashlar.svg?style=flat
   :target: https://anaconda.org/bioconda/ashlar
   :alt:   (downloads)
.. |docker_ashlar| image:: https://quay.io/repository/biocontainers/ashlar/status
   :target: https://quay.io/repository/biocontainers/ashlar
.. _`ashlar/tags`: https://quay.io/repository/biocontainers/ashlar?tab=tags


.. raw:: html

    <script>
        var package = "ashlar";
        var versions = ["1.17.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ashlar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ashlar/README.html