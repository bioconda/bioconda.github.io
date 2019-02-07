.. title:: Package Recipe 'mdust'
.. highlight: bash


mdust
=====

.. conda:recipe:: mdust
   :replaces_section_title:

   mdust from DFCI Gene Indices Software Tools

   :homepage: http://compbio.dfci.harvard.edu/tgi/
   :license: The Artistic License
   :recipe: /`mdust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdust/meta.yaml>`_

   


.. conda:package:: mdust

   |downloads_mdust| |docker_mdust|

   :versions: 2006.10.17

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_mdust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mdust

   and update with::

      conda update mdust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mdust


.. |required_by_mdust| conda:required_by:: mdust
.. |downloads_mdust| image:: https://img.shields.io/conda/dn/bioconda/mdust.svg?style=flat
   :alt:   (downloads)
.. |docker_mdust| image:: https://quay.io/repository/biocontainers/mdust/status
   :target: https://quay.io/repository/biocontainers/mdust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mdust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mdust/README.html

