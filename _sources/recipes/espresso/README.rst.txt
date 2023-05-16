:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'espresso'
.. highlight: bash

espresso
========

.. conda:recipe:: espresso
   :replaces_section_title:
   :noindex:

   ESPRESSO \(Error Statistics PRomoted Evaluator of Splice Site Options\) processes long read RNA\-seq data

   :homepage: https://github.com/Xinglab/espresso
   :license: Free for non-commercial use, see LICENSE file
   :recipe: /`espresso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/espresso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/espresso/meta.yaml>`_

   


.. conda:package:: espresso

   |downloads_espresso| |docker_espresso|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends blast: ``>=2.8.1``
   :depends hmmer: ``>=3.3.1``
   :depends perl: ``>=5.8``
   :depends perl-storable: ``>=3.0``
   :depends samtools: ``>=1.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install espresso

   and update with::

      conda update espresso

   or use the docker container::

      docker pull quay.io/biocontainers/espresso:<tag>

   (see `espresso/tags`_ for valid values for ``<tag>``)


.. |downloads_espresso| image:: https://img.shields.io/conda/dn/bioconda/espresso.svg?style=flat
   :target: https://anaconda.org/bioconda/espresso
   :alt:   (downloads)
.. |docker_espresso| image:: https://quay.io/repository/biocontainers/espresso/status
   :target: https://quay.io/repository/biocontainers/espresso
.. _`espresso/tags`: https://quay.io/repository/biocontainers/espresso?tab=tags


.. raw:: html

    <script>
        var package = "espresso";
        var versions = ["1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/espresso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/espresso/README.html