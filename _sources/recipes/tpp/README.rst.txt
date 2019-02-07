.. title:: Package Recipe 'tpp'
.. highlight: bash


tpp
===

.. conda:recipe:: tpp
   :replaces_section_title:

   The Trans\-Proteomic Pipeline \(TPP\) is a collection of integrated tools for MS\/MS proteomics developed at the Seattle Proteome Center. The Bioconda package includes the command\-line versions of the TPP toolset. These programs include tools for validation \(PeptideProphet\, iProphet\, ProteinProphet\, Mayu\) and quantification \(XPRESS\, ASAPRatio\, Libra\) as well as a number of parsers and converters \(Out2XML\, Mascot2XML\, Tandem2XML\, etc\).


   :homepage: http://tools.proteomecenter.org/wiki/index.php?title=Software:TPP
   :license: GPL v. 2.0 and LGPL
   :recipe: /`tpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpp/meta.yaml>`_

   


.. conda:package:: tpp

   |downloads_tpp| |docker_tpp|

   :versions: 5.0.0

   :depends: :conda:package:`bzip2` 1.0* :conda:package:`hardklor`  :conda:package:`libgcc` <=4.9 :conda:package:`perl` 5.22.0* :conda:package:`perl-findbin-libs`  :conda:package:`perl-xml-parser`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_tpp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tpp

   and update with::

      conda update tpp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tpp


.. |required_by_tpp| conda:required_by:: tpp
.. |downloads_tpp| image:: https://img.shields.io/conda/dn/bioconda/tpp.svg?style=flat
   :alt:   (downloads)
.. |docker_tpp| image:: https://quay.io/repository/biocontainers/tpp/status
   :target: https://quay.io/repository/biocontainers/tpp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tpp/README.html

