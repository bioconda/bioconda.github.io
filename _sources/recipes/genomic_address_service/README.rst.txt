:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomic_address_service'
.. highlight: bash

genomic_address_service
=======================

.. conda:recipe:: genomic_address_service
   :replaces_section_title:
   :noindex:

   Genomic Address Service\: De novo clustering and cluster address assignment

   :homepage: https://pypi.org/project/genomic-address-service
   :developer docs: https://github.com/phac-nml/genomic_address_service
   :license: Apache-2.0
   :recipe: /`genomic_address_service <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomic_address_service>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomic_address_service/meta.yaml>`_

   


.. conda:package:: genomic_address_service

   |downloads_genomic_address_service| |docker_genomic_address_service|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.5-1</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  </span></summary>
      

      ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numba: ``>=0.59.1,<=0.61.2``
   :depends on numpy: ``>=1.26.4,<2.0.0``
   :depends on pandas: ``>=2.0.2,<2.2.0``
   :depends on psutil: ``>=6.1.0``
   :depends on pytables: ``>=3.9.1``
   :depends on pytest: ``>=8.3.3``
   :depends on python: ``>=3.10,<3.13``
   :depends on scikit-bio: ``>=0.4.2``
   :depends on scipy: ``>=1.14.1``
   :depends on six: ``>=1.16.0``

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

    pixi global install genomic_address_service

to add into an existing workspace instead, run::

    pixi add genomic_address_service

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomic_address_service

Alternatively, to install into a new environment, run::

    conda create -n envname genomic_address_service

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomic_address_service:<tag>

(see `genomic_address_service/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomic_address_service| image:: https://img.shields.io/conda/dn/bioconda/genomic_address_service.svg?style=flat
   :target: https://anaconda.org/bioconda/genomic_address_service
   :alt:   (downloads)
.. |docker_genomic_address_service| image:: https://quay.io/repository/biocontainers/genomic_address_service/status
   :target: https://quay.io/repository/biocontainers/genomic_address_service
.. _`genomic_address_service/tags`: https://quay.io/repository/biocontainers/genomic_address_service?tab=tags


.. raw:: html

    <script>
        var package = "genomic_address_service";
        var versions = ["0.3.2","0.3.1","0.3.0","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomic_address_service/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomic_address_service/README.html