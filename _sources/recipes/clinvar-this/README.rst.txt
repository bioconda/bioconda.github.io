:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinvar-this'
.. highlight: bash

clinvar-this
============

.. conda:recipe:: clinvar-this
   :replaces_section_title:
   :noindex:

   ClinVar Submission API Made Easy.

   :homepage: https://github.com/bihealth/clinvar-this
   :license: MIT / MIT
   :recipe: /`clinvar-this <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-this>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-this/meta.yaml>`_

   


.. conda:package:: clinvar-this

   |downloads_clinvar-this| |docker_clinvar-this|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.5-0</code>,  <code>0.18.3-0</code>,  <code>0.18.2-0</code>,  <code>0.18.0-0</code>,  <code>0.17.1-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.5-0</code>,  <code>0.15.4-0</code>,  </span></summary>
      

      ``0.18.5-0``,  ``0.18.3-0``,  ``0.18.2-0``,  ``0.18.0-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.5-0``,  ``0.15.4-0``,  ``0.14.6-0``,  ``0.14.5-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.4.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on httpx: ``>=0.24``
   :depends on jsonschema: 
   :depends on logzero: 
   :depends on protobuf: ``>=3.20.2,<6.0``
   :depends on pydantic: ``>=2.5``
   :depends on pysam: ``>=0.10.0``
   :depends on python: ``>=3.6``
   :depends on python-dateutil: 
   :depends on tabulate: 
   :depends on toml: 
   :depends on tqdm: ``>=4.0``
   :depends on xmltodict: ``>=0.13.0,<0.15``

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

    pixi global install clinvar-this

to add into an existing workspace instead, run::

    pixi add clinvar-this

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clinvar-this

Alternatively, to install into a new environment, run::

    conda create -n envname clinvar-this

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clinvar-this:<tag>

(see `clinvar-this/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clinvar-this| image:: https://img.shields.io/conda/dn/bioconda/clinvar-this.svg?style=flat
   :target: https://anaconda.org/bioconda/clinvar-this
   :alt:   (downloads)
.. |docker_clinvar-this| image:: https://quay.io/repository/biocontainers/clinvar-this/status
   :target: https://quay.io/repository/biocontainers/clinvar-this
.. _`clinvar-this/tags`: https://quay.io/repository/biocontainers/clinvar-this?tab=tags


.. raw:: html

    <script>
        var package = "clinvar-this";
        var versions = ["0.18.5","0.18.3","0.18.2","0.18.0","0.17.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinvar-this/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinvar-this/README.html