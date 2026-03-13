:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapec'
.. highlight: bash

soapec
======

.. conda:recipe:: soapec
   :replaces_section_title:
   :noindex:

   a correction tool for SOAPdenovo

   :homepage: http://soap.genomics.org.cn/soapdenovo.html
   :license: GNU
   :recipe: /`soapec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapec/meta.yaml>`_

   


.. conda:package:: soapec

   |downloads_soapec| |docker_soapec|

   :versions:
      
      

      ``2.03-9``,  ``2.03-8``,  ``2.03-7``,  ``2.03-6``,  ``2.03-5``,  ``2.03-4``,  ``2.03-3``,  ``2.03-1``,  ``2.03-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install soapec

to add into an existing workspace instead, run::

    pixi add soapec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install soapec

Alternatively, to install into a new environment, run::

    conda create -n envname soapec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/soapec:<tag>

(see `soapec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_soapec| image:: https://img.shields.io/conda/dn/bioconda/soapec.svg?style=flat
   :target: https://anaconda.org/bioconda/soapec
   :alt:   (downloads)
.. |docker_soapec| image:: https://quay.io/repository/biocontainers/soapec/status
   :target: https://quay.io/repository/biocontainers/soapec
.. _`soapec/tags`: https://quay.io/repository/biocontainers/soapec?tab=tags


.. raw:: html

    <script>
        var package = "soapec";
        var versions = ["2.03","2.03","2.03","2.03","2.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapec/README.html