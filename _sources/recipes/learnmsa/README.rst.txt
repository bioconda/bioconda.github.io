:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'learnmsa'
.. highlight: bash

learnmsa
========

.. conda:recipe:: learnmsa
   :replaces_section_title:
   :noindex:

   learnMSA\: Learning and Aligning large Protein Families

   :homepage: https://github.com/Gaius-Augustus/learnMSA
   :license: MIT / MIT
   :recipe: /`learnmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/learnmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/learnmsa/meta.yaml>`_

   


.. conda:package:: learnmsa

   |downloads_learnmsa| |docker_learnmsa|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.1-0``

      

   
   :depends logomaker: 
   :depends networkx: 
   :depends python: ``>=3.7``
   :depends seaborn: 
   :depends tensorflow: ``>=2.7.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install learnmsa

   and update with::

      conda update learnmsa

   or use the docker container::

      docker pull quay.io/biocontainers/learnmsa:<tag>

   (see `learnmsa/tags`_ for valid values for ``<tag>``)


.. |downloads_learnmsa| image:: https://img.shields.io/conda/dn/bioconda/learnmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/learnmsa
   :alt:   (downloads)
.. |docker_learnmsa| image:: https://quay.io/repository/biocontainers/learnmsa/status
   :target: https://quay.io/repository/biocontainers/learnmsa
.. _`learnmsa/tags`: https://quay.io/repository/biocontainers/learnmsa?tab=tags


.. raw:: html

    <script>
        var package = "learnmsa";
        var versions = ["1.3.0","1.2.4","1.1.2","1.1.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/learnmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/learnmsa/README.html