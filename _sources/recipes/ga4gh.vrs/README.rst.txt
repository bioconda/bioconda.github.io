:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ga4gh.vrs'
.. highlight: bash

ga4gh.vrs
=========

.. conda:recipe:: ga4gh.vrs
   :replaces_section_title:
   :noindex:

   GA4GH Variation Representation Specification \(VRS\) reference implementation

   :homepage: https://vrs.ga4gh.org
   :developer docs: https://github.com/ga4gh/vrs-python
   :license: Apache-2.0
   :recipe: /`ga4gh.vrs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ga4gh.vrs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ga4gh.vrs/meta.yaml>`_

   


.. conda:package:: ga4gh.vrs

   |downloads_ga4gh.vrs| |docker_ga4gh.vrs|

   :versions:
      
      

      ``2.3.1-0``

      

   
   :depends on biocommons.seqrepo: ``>=0.5.1``
   :depends on bioutils: ``>=0.6``
   :depends on canonicaljson: 
   :depends on click: 
   :depends on dill: 
   :depends on hgvs: ``>=1.5.5,<2.0``
   :depends on pydantic: ``>=2.1,<3.dev0``
   :depends on pysam: 
   :depends on python: ``>=3.10``
   :depends on requests: 
   :depends on typing_extensions: 

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

    pixi global install ga4gh.vrs

to add into an existing workspace instead, run::

    pixi add ga4gh.vrs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ga4gh.vrs

Alternatively, to install into a new environment, run::

    conda create -n envname ga4gh.vrs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ga4gh.vrs:<tag>

(see `ga4gh.vrs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ga4gh.vrs| image:: https://img.shields.io/conda/dn/bioconda/ga4gh.vrs.svg?style=flat
   :target: https://anaconda.org/bioconda/ga4gh.vrs
   :alt:   (downloads)
.. |docker_ga4gh.vrs| image:: https://quay.io/repository/biocontainers/ga4gh.vrs/status
   :target: https://quay.io/repository/biocontainers/ga4gh.vrs
.. _`ga4gh.vrs/tags`: https://quay.io/repository/biocontainers/ga4gh.vrs?tab=tags


.. raw:: html

    <script>
        var package = "ga4gh.vrs";
        var versions = ["2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ga4gh.vrs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ga4gh.vrs/README.html