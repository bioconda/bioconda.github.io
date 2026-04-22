:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbl2asn-forever'
.. highlight: bash

tbl2asn-forever
===============

.. conda:recipe:: tbl2asn-forever
   :replaces_section_title:
   :noindex:

   tbl2asn is a program that automates the creation of sequence records for submission to GenBank

   :homepage: https://www.ncbi.nlm.nih.gov/genbank/tbl2asn2
   :license: Public Domain
   :recipe: /`tbl2asn-forever <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn-forever>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn-forever/meta.yaml>`_

   


.. conda:package:: tbl2asn-forever

   |downloads_tbl2asn-forever| |docker_tbl2asn-forever|

   :versions:
      
      

      ``25.7.2f-6``,  ``25.7.2f-5``,  ``25.7.2f-4``,  ``25.7.2f-3``,  ``25.7.2f-2``,  ``25.7.2f-1``,  ``25.7.2f-0``,  ``25.7.1f-0``,  ``25.7f-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libidn11: 
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install tbl2asn-forever

to add into an existing workspace instead, run::

    pixi add tbl2asn-forever

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tbl2asn-forever

Alternatively, to install into a new environment, run::

    conda create -n envname tbl2asn-forever

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tbl2asn-forever:<tag>

(see `tbl2asn-forever/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tbl2asn-forever| image:: https://img.shields.io/conda/dn/bioconda/tbl2asn-forever.svg?style=flat
   :target: https://anaconda.org/bioconda/tbl2asn-forever
   :alt:   (downloads)
.. |docker_tbl2asn-forever| image:: https://quay.io/repository/biocontainers/tbl2asn-forever/status
   :target: https://quay.io/repository/biocontainers/tbl2asn-forever
.. _`tbl2asn-forever/tags`: https://quay.io/repository/biocontainers/tbl2asn-forever?tab=tags


.. raw:: html

    <script>
        var package = "tbl2asn-forever";
        var versions = ["25.7.2f","25.7.2f","25.7.2f","25.7.2f","25.7.2f"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbl2asn-forever/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbl2asn-forever/README.html