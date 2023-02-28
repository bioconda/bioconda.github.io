:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitobim'
.. highlight: bash

mitobim
=======

.. conda:recipe:: mitobim
   :replaces_section_title:
   :noindex:

   mitochondrial baiting and iterative mapping

   :homepage: https://github.com/chrishah/MITObim
   :license: MIT
   :recipe: /`mitobim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitobim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitobim/meta.yaml>`_

   


.. conda:package:: mitobim

   |downloads_mitobim| |docker_mitobim|

   :versions:
      
      

      ``1.9.1-1``,  ``1.9.1-0``

      

   
   :depends mira: ``4.0.2.*``
   :depends parallel: 
   :depends perl: 
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mitobim

   and update with::

      conda update mitobim

   or use the docker container::

      docker pull quay.io/biocontainers/mitobim:<tag>

   (see `mitobim/tags`_ for valid values for ``<tag>``)


.. |downloads_mitobim| image:: https://img.shields.io/conda/dn/bioconda/mitobim.svg?style=flat
   :target: https://anaconda.org/bioconda/mitobim
   :alt:   (downloads)
.. |docker_mitobim| image:: https://quay.io/repository/biocontainers/mitobim/status
   :target: https://quay.io/repository/biocontainers/mitobim
.. _`mitobim/tags`: https://quay.io/repository/biocontainers/mitobim?tab=tags


.. raw:: html

    <script>
        var package = "mitobim";
        var versions = ["1.9.1","1.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitobim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitobim/README.html