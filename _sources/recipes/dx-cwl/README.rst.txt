.. title:: Package Recipe 'dx-cwl'
.. highlight: bash


dx-cwl
======

.. conda:recipe:: dx-cwl
   :replaces_section_title:

   Import and run CWL workflows on DNAnexus

   :homepage: https://github.com/dnanexus/dx-cwl
   :license: Apache v2.0
   :recipe: /`dx-cwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dx-cwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dx-cwl/meta.yaml>`_

   


.. conda:package:: dx-cwl

   |downloads_dx-cwl| |docker_dx-cwl|

   :versions: 0.1.0a20180905, 0.1.0a20180829, 0.1.0a20180820, 0.1.0a20180119, 0.1.0a20180116, 0.1.0a20171231, 0.1.0a20171222, 0.1.0a20171221, 0.1.0a20171213, 0.1.0a20171211, 0.1.0a20171206, 0.1.0a20171029

   :depends: :conda:package:`cwltool`  :conda:package:`dxpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pyyaml`  

   :required~by: |required_by_dx-cwl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dx-cwl

   and update with::

      conda update dx-cwl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dx-cwl


.. |required_by_dx-cwl| conda:required_by:: dx-cwl
.. |downloads_dx-cwl| image:: https://img.shields.io/conda/dn/bioconda/dx-cwl.svg?style=flat
   :alt:   (downloads)
.. |docker_dx-cwl| image:: https://quay.io/repository/biocontainers/dx-cwl/status
   :target: https://quay.io/repository/biocontainers/dx-cwl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dx-cwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dx-cwl/README.html

