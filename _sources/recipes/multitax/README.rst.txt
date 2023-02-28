:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multitax'
.. highlight: bash

multitax
========

.. conda:recipe:: multitax
   :replaces_section_title:
   :noindex:

   Python package to obtain\, parse and explore biological taxonomies

   :homepage: https://github.com/pirovc/multitax
   :license: MIT / MIT License
   :recipe: /`multitax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multitax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multitax/meta.yaml>`_

   MultiTax is a Python package that provides a common and generalized set 
   of functions to download\, parse\, filter and explore multiple biological 
   taxonomies \(GTDB\, NCBI\, Silva\, Greengenes\, Open Tree taxonomy\) and 
   custom formatted taxonomies.



.. conda:package:: multitax

   |downloads_multitax| |docker_multitax|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multitax

   and update with::

      conda update multitax

   or use the docker container::

      docker pull quay.io/biocontainers/multitax:<tag>

   (see `multitax/tags`_ for valid values for ``<tag>``)


.. |downloads_multitax| image:: https://img.shields.io/conda/dn/bioconda/multitax.svg?style=flat
   :target: https://anaconda.org/bioconda/multitax
   :alt:   (downloads)
.. |docker_multitax| image:: https://quay.io/repository/biocontainers/multitax/status
   :target: https://quay.io/repository/biocontainers/multitax
.. _`multitax/tags`: https://quay.io/repository/biocontainers/multitax?tab=tags


.. raw:: html

    <script>
        var package = "multitax";
        var versions = ["1.2.1","1.2.0","1.1.1","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multitax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multitax/README.html