:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'garnet'
.. highlight: bash

garnet
======

.. conda:recipe:: garnet
   :replaces_section_title:
   :noindex:

   GarNet uses gene expression and epigenetic data to impute transcription factors \(TFs\) that played an important role in a biological system.

   :homepage: https://github.com/fraenkel-lab/GarNet
   :license: MIT / MIT
   :recipe: /`garnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnet/meta.yaml>`_

   


.. conda:package:: garnet

   |downloads_garnet| |docker_garnet|

   :versions:
      
      

      ``0.4.5-0``,  ``0.4.3-0``,  ``0.4.0-0``,  ``0.2.20-0``,  ``0.2.17-0``

      

   
   :depends intervaltree: 
   :depends jinja2: 
   :depends libgcc: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``3.5*``
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install garnet

   and update with::

      conda update garnet

   or use the docker container::

      docker pull quay.io/biocontainers/garnet:<tag>

   (see `garnet/tags`_ for valid values for ``<tag>``)


.. |downloads_garnet| image:: https://img.shields.io/conda/dn/bioconda/garnet.svg?style=flat
   :target: https://anaconda.org/bioconda/garnet
   :alt:   (downloads)
.. |docker_garnet| image:: https://quay.io/repository/biocontainers/garnet/status
   :target: https://quay.io/repository/biocontainers/garnet
.. _`garnet/tags`: https://quay.io/repository/biocontainers/garnet?tab=tags


.. raw:: html

    <script>
        var package = "garnet";
        var versions = ["0.4.5","0.4.3","0.4.0","0.2.20","0.2.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/garnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/garnet/README.html