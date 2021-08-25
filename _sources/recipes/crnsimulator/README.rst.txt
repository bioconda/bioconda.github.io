:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crnsimulator'
.. highlight: bash

crnsimulator
============

.. conda:recipe:: crnsimulator
   :replaces_section_title:
   :noindex:

   Simulate chemical recation networks \(CRNs\) using ordinary differential equations \(ODEs\).

   :homepage: https://github.com/bad-ants-fleet/crnsimulator
   :license: MIT
   :recipe: /`crnsimulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crnsimulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crnsimulator/meta.yaml>`_

   


.. conda:package:: crnsimulator

   |downloads_crnsimulator| |docker_crnsimulator|

   :versions:
      
      

      ``0.9-0``,  ``0.5-0``

      

   
   :depends networkx: 
   :depends numpy: 
   :depends pyparsing: 
   :depends python: 
   :depends scipy: 
   :depends seaborn: 
   :depends sympy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crnsimulator

   and update with::

      conda update crnsimulator

   or use the docker container::

      docker pull quay.io/biocontainers/crnsimulator:<tag>

   (see `crnsimulator/tags`_ for valid values for ``<tag>``)


.. |downloads_crnsimulator| image:: https://img.shields.io/conda/dn/bioconda/crnsimulator.svg?style=flat
   :target: https://anaconda.org/bioconda/crnsimulator
   :alt:   (downloads)
.. |docker_crnsimulator| image:: https://quay.io/repository/biocontainers/crnsimulator/status
   :target: https://quay.io/repository/biocontainers/crnsimulator
.. _`crnsimulator/tags`: https://quay.io/repository/biocontainers/crnsimulator?tab=tags


.. raw:: html

    <script>
        var package = "crnsimulator";
        var versions = ["0.9","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crnsimulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crnsimulator/README.html