:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anadama2'
.. highlight: bash

anadama2
========

.. conda:recipe:: anadama2
   :replaces_section_title:
   :noindex:

   AnADAMA2\: Another Automated Data Analysis Management Application 2

   :homepage: http://huttenhower.sph.harvard.edu/anadama2
   :license: MIT / MIT
   :recipe: /`anadama2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anadama2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anadama2/meta.yaml>`_

   AnADAMA2 is the next generation of AnADAMA. AnADAMA is a tool to create reproducible workflows and execute them efficiently. Tasks can be run locally or in a grid computing environment to increase efficiency. Essential information from all tasks is recorded\, using the default logger and command line reporters\, to ensure reproducibility. A auto\-doc feature allows for workflows to generate documentation automatically to further ensure reproducibility by capturing the latest essential workflow information. AnADAMA2 was architected to be modular allowing users to customize the application by subclassing the base grid meta\-schedulers\, reporters\, and tracked objects \(ie files\, executables\, etc\).


.. conda:package:: anadama2

   |downloads_anadama2| |docker_anadama2|

   :versions:
      
      

      ``0.7.5-0``

      

   
   :depends cloudpickle: 
   :depends markdown: 
   :depends networkx: 
   :depends pweave: 
   :depends python: ``>=3``
   :depends python-leveldb: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anadama2

   and update with::

      conda update anadama2

   or use the docker container::

      docker pull quay.io/biocontainers/anadama2:<tag>

   (see `anadama2/tags`_ for valid values for ``<tag>``)


.. |downloads_anadama2| image:: https://img.shields.io/conda/dn/bioconda/anadama2.svg?style=flat
   :target: https://anaconda.org/bioconda/anadama2
   :alt:   (downloads)
.. |docker_anadama2| image:: https://quay.io/repository/biocontainers/anadama2/status
   :target: https://quay.io/repository/biocontainers/anadama2
.. _`anadama2/tags`: https://quay.io/repository/biocontainers/anadama2?tab=tags


.. raw:: html

    <script>
        var package = "anadama2";
        var versions = ["0.7.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anadama2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anadama2/README.html