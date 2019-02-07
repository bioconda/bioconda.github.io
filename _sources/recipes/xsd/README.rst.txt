.. title:: Package Recipe 'xsd'
.. highlight: bash


xsd
===

.. conda:recipe:: xsd
   :replaces_section_title:

   CodeSynthesis XSD is an open\-source\, cross\-platform W3C XML Schema to C\+\+ data binding compiler. Provided with an XML instance specification \(XML Schema\)\, it generates C\+\+ classes that represent the given vocabulary as well as XML parsing and serialization code.

   :homepage: http://www.codesynthesis.com/products/xsd/
   :license: GPL
   :recipe: /`xsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xsd/meta.yaml>`_

   


.. conda:package:: xsd

   |downloads_xsd| |docker_xsd|

   :versions: 4.0.0_dep

   :depends: :conda:package:`libgcc`  :conda:package:`xerces-c`  

   :required~by: |required_by_xsd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xsd

   and update with::

      conda update xsd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xsd


.. |required_by_xsd| conda:required_by:: xsd
.. |downloads_xsd| image:: https://img.shields.io/conda/dn/bioconda/xsd.svg?style=flat
   :alt:   (downloads)
.. |docker_xsd| image:: https://quay.io/repository/biocontainers/xsd/status
   :target: https://quay.io/repository/biocontainers/xsd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xsd/README.html

