:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-nextgen-vm'
.. highlight: bash

bcbio-nextgen-vm
================

.. conda:recipe:: bcbio-nextgen-vm
   :replaces_section_title:
   :noindex:

   Run bcbio\-nextgen genomic sequencing analyses using isolated containers and virtual machines

   :homepage: https://github.com/chapmanb/bcbio-nextgen-vm
   :license: MIT
   :recipe: /`bcbio-nextgen-vm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-nextgen-vm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-nextgen-vm/meta.yaml>`_

   


.. conda:package:: bcbio-nextgen-vm

   |downloads_bcbio-nextgen-vm| |docker_bcbio-nextgen-vm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.6-3</code>,  <code>0.1.6-2</code>,  <code>0.1.6-1</code>,  <code>0.1.6-0</code>,  <code>0.1.5-0</code>,  <code>0.1.3-1</code>,  <code>0.1.2a-1</code>,  <code>0.1.1-1</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.1.6-3``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.3-1``,  ``0.1.2a-1``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0a-136``,  ``0.1.0a-135``,  ``0.1.0a-134``,  ``0.1.0a-133``,  ``0.1.0a-132``,  ``0.1.0a-131``,  ``0.1.0a-130``,  ``0.1.0a-129``,  ``0.1.0a-128``,  ``0.1.0a-127``,  ``0.1.0a-126``,  ``0.1.0a-125``,  ``0.1.0a-124``,  ``0.1.0a-123``,  ``0.1.0a-122``,  ``0.1.0a-121``,  ``0.1.0a-120``,  ``0.1.0a-119``,  ``0.1.0a-118``,  ``0.1.0a-117``,  ``0.1.0a-116``,  ``0.1.0a-115``,  ``0.1.0a-114``,  ``0.1.0a-113``,  ``0.1.0a-112``,  ``0.1.0a-111``,  ``0.1.0a-110``,  ``0.1.0a-109``,  ``0.1.0a-108``,  ``0.1.0a-107``,  ``0.1.0a-106``,  ``0.1.0a-105``,  ``0.1.0a-104``,  ``0.1.0a-103``,  ``0.1.0a-102``,  ``0.1.0a-101``,  ``0.1.0a-100``,  ``0.1.0a-99``,  ``0.1.0a-98``,  ``0.1.0a-97``,  ``0.1.0a-96``,  ``0.1.0a-95``,  ``0.1.0a-94``,  ``0.1.0a-93``,  ``0.1.0a-92``,  ``0.1.0a-91``,  ``0.1.0a-90``,  ``0.1.0a-89``,  ``0.1.0a-88``,  ``0.1.0a-87``,  ``0.1.0a-86``,  ``0.1.0a-85``,  ``0.1.0a-84``,  ``0.1.0a-83``,  ``0.1.0a-82``,  ``0.1.0a-81``,  ``0.1.0a-80``,  ``0.1.0a-79``,  ``0.1.0a-78``,  ``0.1.0a-77``,  ``0.1.0a-76``,  ``0.1.0a-75``,  ``0.1.0a-74``,  ``0.1.0a-73``,  ``0.1.0a-72``,  ``0.1.0a-71``,  ``0.1.0a-70``,  ``0.1.0a-69``

      
      .. raw:: html

         </details>
      

   
   :depends on arvados-cwl-runner: ``>=1.3.1.20190301150258``
   :depends on bcbio-nextgen: ``>1.1.4``
   :depends on boto3: 
   :depends on cachecontrol: ``0.11.7``
   :depends on cromwell: ``>=0.36``
   :depends on cwltool: 
   :depends on dx-cwl: ``>=0.1.0a20180820``
   :depends on dxpy: 
   :depends on google-cloud-sdk: 
   :depends on ipyparallel: ``>=6.0.2``
   :depends on nodejs: 
   :depends on nose: 
   :depends on pathlib2: ``2.3.2``
   :depends on pysam: ``>=0.15.2``
   :depends on python: 
   :depends on python-dateutil: ``>=2.5.0``
   :depends on rabix-bunny: ``>=1.0.4``
   :depends on ruamel.yaml: ``>=0.13.0``
   :depends on sevenbridges-python: ``>=0.17.5``
   :depends on six: 
   :depends on synapseclient: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bcbio-nextgen-vm

to add into an existing workspace instead, run::

    pixi add bcbio-nextgen-vm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcbio-nextgen-vm

Alternatively, to install into a new environment, run::

    conda create -n envname bcbio-nextgen-vm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcbio-nextgen-vm:<tag>

(see `bcbio-nextgen-vm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcbio-nextgen-vm| image:: https://img.shields.io/conda/dn/bioconda/bcbio-nextgen-vm.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-nextgen-vm
   :alt:   (downloads)
.. |docker_bcbio-nextgen-vm| image:: https://quay.io/repository/biocontainers/bcbio-nextgen-vm/status
   :target: https://quay.io/repository/biocontainers/bcbio-nextgen-vm
.. _`bcbio-nextgen-vm/tags`: https://quay.io/repository/biocontainers/bcbio-nextgen-vm?tab=tags


.. raw:: html

    <script>
        var package = "bcbio-nextgen-vm";
        var versions = ["0.1.6","0.1.6","0.1.6","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-nextgen-vm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-nextgen-vm/README.html