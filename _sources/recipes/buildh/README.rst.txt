:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'buildh'
.. highlight: bash

buildh
======

.. conda:recipe:: buildh
   :replaces_section_title:
   :noindex:

   Build hydrogen atoms from a united\-atom MD of lipids and calculate the order parameter.

   :homepage: https://github.com/patrickfuchs/buildH
   :documentation: https://buildh.readthedocs.io/
   
   :license: BSD / BSD 3-Clause
   :recipe: /`buildh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/buildh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/buildh/meta.yaml>`_

   


.. conda:package:: buildh

   |downloads_buildh| |docker_buildh|

   :versions:
      
      

      ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.3.1-0``

      

   
   :depends on mdanalysis: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.6``

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

    pixi global install buildh

to add into an existing workspace instead, run::

    pixi add buildh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install buildh

Alternatively, to install into a new environment, run::

    conda create -n envname buildh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/buildh:<tag>

(see `buildh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_buildh| image:: https://img.shields.io/conda/dn/bioconda/buildh.svg?style=flat
   :target: https://anaconda.org/bioconda/buildh
   :alt:   (downloads)
.. |docker_buildh| image:: https://quay.io/repository/biocontainers/buildh/status
   :target: https://quay.io/repository/biocontainers/buildh
.. _`buildh/tags`: https://quay.io/repository/biocontainers/buildh?tab=tags


.. raw:: html

    <script>
        var package = "buildh";
        var versions = ["1.6.1","1.6.0","1.4.0","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/buildh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/buildh/README.html