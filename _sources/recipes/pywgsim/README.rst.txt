:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pywgsim'
.. highlight: bash

pywgsim
=======

.. conda:recipe:: pywgsim
   :replaces_section_title:
   :noindex:

   pywgsim

   :homepage: https://github.com/ialbert/pywgsim
   :license: MIT
   :recipe: /`pywgsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywgsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywgsim/meta.yaml>`_

   


.. conda:package:: pywgsim

   |downloads_pywgsim| |docker_pywgsim|

   :versions:
      
      

      ``0.5.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends plac: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pywgsim

   and update with::

      conda update pywgsim

   or use the docker container::

      docker pull quay.io/biocontainers/pywgsim:<tag>

   (see `pywgsim/tags`_ for valid values for ``<tag>``)


.. |downloads_pywgsim| image:: https://img.shields.io/conda/dn/bioconda/pywgsim.svg?style=flat
   :target: https://anaconda.org/bioconda/pywgsim
   :alt:   (downloads)
.. |docker_pywgsim| image:: https://quay.io/repository/biocontainers/pywgsim/status
   :target: https://quay.io/repository/biocontainers/pywgsim
.. _`pywgsim/tags`: https://quay.io/repository/biocontainers/pywgsim?tab=tags


.. raw:: html

    <script>
        var package = "pywgsim";
        var versions = ["0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pywgsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pywgsim/README.html