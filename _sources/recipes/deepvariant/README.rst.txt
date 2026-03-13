:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepvariant'
.. highlight: bash

deepvariant
===========

.. conda:recipe:: deepvariant
   :replaces_section_title:
   :noindex:

   DeepVariant is an analysis pipeline that uses a deep neural network to call genetic variants from next\-generation DNA sequencing data.

   :homepage: https://github.com/google/deepvariant
   :documentation: https://github.com/google/deepvariant/blob/v1.10.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`deepvariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepvariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepvariant/meta.yaml>`_

   


.. conda:package:: deepvariant

   |downloads_deepvariant| |docker_deepvariant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  </span></summary>
      

      ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.10.0-4``,  ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on absl-py: 
   :depends on altair: 
   :depends on boost-cpp: 
   :depends on contextlib2: 
   :depends on crcmod: 
   :depends on google-cloud-sdk: 
   :depends on htslib: 
   :depends on intervaltree: 
   :depends on mock: 
   :depends on numpy: ``>=1.21.2``
   :depends on oauth2client: 
   :depends on openjdk: ``11.0.*``
   :depends on parallel: 
   :depends on protobuf: 
   :depends on psutil: 
   :depends on python: ``<3.11``
   :depends on requests: 
   :depends on scipy: 
   :depends on six: 
   :depends on tensorflow: ``2.11.*``
   :depends on tensorflow-estimator: ``2.11.*``

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

    pixi global install deepvariant

to add into an existing workspace instead, run::

    pixi add deepvariant

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepvariant

Alternatively, to install into a new environment, run::

    conda create -n envname deepvariant

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepvariant:<tag>

(see `deepvariant/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepvariant| image:: https://img.shields.io/conda/dn/bioconda/deepvariant.svg?style=flat
   :target: https://anaconda.org/bioconda/deepvariant
   :alt:   (downloads)
.. |docker_deepvariant| image:: https://quay.io/repository/biocontainers/deepvariant/status
   :target: https://quay.io/repository/biocontainers/deepvariant
.. _`deepvariant/tags`: https://quay.io/repository/biocontainers/deepvariant?tab=tags


.. raw:: html

    <script>
        var package = "deepvariant";
        var versions = ["1.10.0","1.9.0","1.8.0","1.5.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepvariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepvariant/README.html