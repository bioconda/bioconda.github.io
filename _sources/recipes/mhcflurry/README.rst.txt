:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcflurry'
.. highlight: bash

mhcflurry
=========

.. conda:recipe:: mhcflurry
   :replaces_section_title:

   Peptide\-MHC I binding affinity prediction

   :homepage: https://github.com/hammerlab/mhcflurry
   :documentation: http://openvax.github.io/mhcflurry/
   
   :license: Apache License Version 2.0
   :recipe: /`mhcflurry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcflurry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcflurry/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2018.05.014`

   


.. conda:package:: mhcflurry

   |downloads_mhcflurry| |docker_mhcflurry|

   :versions: 1.3.1-0, 1.3.0-0, 1.2.4-0, 1.2.2-0
   
   :depends appdirs: 
   :depends keras: >=2.0.9
   :depends mhcnames: 
   :depends numpy: >=1.11
   :depends pandas: >=0.20.3
   :depends python: 
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends six: 
   :depends tensorflow: >=1.1.0
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mhcflurry

   and update with::

      conda update mhcflurry

   or use the docker container::

      docker pull quay.io/biocontainers/mhcflurry:<tag>

   (see `mhcflurry/tags`_ for valid values for ``<tag>``)


.. |downloads_mhcflurry| image:: https://img.shields.io/conda/dn/bioconda/mhcflurry.svg?style=flat
   :target: https://anaconda.org/bioconda/mhcflurry
   :alt:   (downloads)
.. |docker_mhcflurry| image:: https://quay.io/repository/biocontainers/mhcflurry/status
   :target: https://quay.io/repository/biocontainers/mhcflurry
.. _`mhcflurry/tags`: https://quay.io/repository/biocontainers/mhcflurry?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcflurry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcflurry/README.html