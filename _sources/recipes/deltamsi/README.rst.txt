:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deltamsi'
.. highlight: bash

deltamsi
========

.. conda:recipe:: deltamsi
   :replaces_section_title:
   :noindex:

   DeltaMSI\: AI\-based modeling of microsatellite instability scoring on NGS data

   :homepage: https://github.com/RADar-AZDelta/DeltaMSI
   :license: GNU General Public License v3.0
   :recipe: /`deltamsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltamsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltamsi/meta.yaml>`_

   


.. conda:package:: deltamsi

   |downloads_deltamsi| |docker_deltamsi|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.21.2``
   :depends openpyxl: 
   :depends pandas: 
   :depends pysam: ``>=0.15.3``
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deltamsi

   and update with::

      conda update deltamsi

   or use the docker container::

      docker pull quay.io/biocontainers/deltamsi:<tag>

   (see `deltamsi/tags`_ for valid values for ``<tag>``)


.. |downloads_deltamsi| image:: https://img.shields.io/conda/dn/bioconda/deltamsi.svg?style=flat
   :target: https://anaconda.org/bioconda/deltamsi
   :alt:   (downloads)
.. |docker_deltamsi| image:: https://quay.io/repository/biocontainers/deltamsi/status
   :target: https://quay.io/repository/biocontainers/deltamsi
.. _`deltamsi/tags`: https://quay.io/repository/biocontainers/deltamsi?tab=tags


.. raw:: html

    <script>
        var package = "deltamsi";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deltamsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deltamsi/README.html