:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varcode'
.. highlight: bash

varcode
=======

.. conda:recipe:: varcode
   :replaces_section_title:
   :noindex:

   Variant annotation in Python

   :homepage: https://github.com/openvax/varcode
   :license: APACHE / Apache-2.0
   :recipe: /`varcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varcode/meta.yaml>`_

   


.. conda:package:: varcode

   |downloads_varcode| |docker_varcode|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on biopython: ``>=1.64``
   :depends on memoized-property: ``>=1.0.2``
   :depends on numpy: ``>=1.7``
   :depends on pandas: ``>=0.15``
   :depends on pyensembl: ``>=1.8.1``
   :depends on python: 
   :depends on pyvcf3: ``>=1.0.0``
   :depends on sercol: ``>=0.1.4``
   :depends on serializable: ``>=0.2.1``

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

    pixi global install varcode

to add into an existing workspace instead, run::

    pixi add varcode

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install varcode

Alternatively, to install into a new environment, run::

    conda create -n envname varcode

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/varcode:<tag>

(see `varcode/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_varcode| image:: https://img.shields.io/conda/dn/bioconda/varcode.svg?style=flat
   :target: https://anaconda.org/bioconda/varcode
   :alt:   (downloads)
.. |docker_varcode| image:: https://quay.io/repository/biocontainers/varcode/status
   :target: https://quay.io/repository/biocontainers/varcode
.. _`varcode/tags`: https://quay.io/repository/biocontainers/varcode?tab=tags


.. raw:: html

    <script>
        var package = "varcode";
        var versions = ["1.2.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varcode/README.html