:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccp4srs'
.. highlight: bash

ccp4srs
=======

.. conda:recipe:: ccp4srs
   :replaces_section_title:
   :noindex:

   CCP4 Storage\, Retrieval and Search framework for small\-molecule data

   :homepage: https://www.ccp4.ac.uk
   :documentation: https://ccp4forge.rc-harwell.ac.uk/ccp4/ccp4srs/-/tree/935b2d99b73f5f8b2396a5f2b6cdc617610131b5/doc-html/html
   
   :developer docs: https://ccp4forge.rc-harwell.ac.uk/ccp4/ccp4srs
   :license: GPL3 / LGPL-3.0
   :recipe: /`ccp4srs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccp4srs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccp4srs/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444994003112`

   CCP4SRS is a vital part of the CCP4 suite designed for handling and generating Crystallographic Information File \(CIF\) library files.
   It provides a robust framework for storing\, retrieving\, and searching small\-molecule crystallographic data.



.. conda:package:: ccp4srs

   |downloads_ccp4srs| |docker_ccp4srs|

   :versions:
      
      

      ``2024.06.14-0``

      

   
   :depends on libccp4: ``>=8.0.0,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mmdb2: ``>=2.0.22,<3.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install ccp4srs

to add into an existing workspace instead, run::

    pixi add ccp4srs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ccp4srs

Alternatively, to install into a new environment, run::

    conda create -n envname ccp4srs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ccp4srs:<tag>

(see `ccp4srs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ccp4srs| image:: https://img.shields.io/conda/dn/bioconda/ccp4srs.svg?style=flat
   :target: https://anaconda.org/bioconda/ccp4srs
   :alt:   (downloads)
.. |docker_ccp4srs| image:: https://quay.io/repository/biocontainers/ccp4srs/status
   :target: https://quay.io/repository/biocontainers/ccp4srs
.. _`ccp4srs/tags`: https://quay.io/repository/biocontainers/ccp4srs?tab=tags


.. raw:: html

    <script>
        var package = "ccp4srs";
        var versions = ["2024.06.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccp4srs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccp4srs/README.html